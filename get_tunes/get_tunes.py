#import urllib2
import urllib.request
import urllib.error
import requests
import facepy
from facepy import GraphAPI

import re
import json
import mysql.connector


def connect_db():

    connection = mysql.connector.connect(user='JohnDoe',password='abc123',host = '127.0.0.1',database = 'facebook_data')
    return connection


def create_post_url(graph_url, APP_ID, APP_SECRET):
    # create authenticated post URL
    post_args = "/posts/?key=value&access_token=" + APP_ID + "|" + APP_SECRET
    post_url = graph_url + post_args

    return post_url


def render_to_json(graph_url):
    # render graph url call to JSON
    #web_response = urllib.request.urlopen(graph_url)
    #returning bytes retarded urllib can't parse into bytes ?

    web_response = urllib.request.urlopen(graph_url).read().decode('utf8')
    print(web_response)
    #readable_page = web_response.read()
   # print(readable_page)
    json_data = json.loads(web_response)
    print(json_data)

    return json_data


def main():
    # simple data pull App Secret and App ID
    app_secret = "b3184c36368b28615e2b38c385d108e1"
    app_id = "1207111769386560"

    # to find go to page's FB page, at the end of URL find username
    # e.g. http://facebook.com/walmart, walmart is the username
    list_companies = ["walmart", "cisco", "pepsi", "facebook"]
    graph_url = "https://graph.facebook.com/"

    # create db connection
    #connection = connect_db()
    #cursor = connection.cursor()

    # SQL statement for adding Facebook page data to database
    insert_info = ("INSERT INTO page_info "
                   "(fb_id, likes, talking_about, username)"
                   "VALUES (%s, %s, %s, %s)")

    for company in list_companies:
        print("loop")
        # make graph api url with company username
        current_page = graph_url + company

        # open public page in facebook graph api

        print(current_page)
        #current_page = "http://echo.jsontest.com/key/value/one/two"

        ##failing here b/c bad request
        #json_fbpage = render_to_json(current_page)
        #TODO
        json_fbpage = current_page

        get_token = "https://graph.facebook.com/oauth/access_token?client_id=" + app_id + "&client_secret=" + app_secret + "&grant_type=client_credentials"
        no_token_base = "https://graph.facebook.com/endpoint?key=value&amp;access_token="
        id_secret = app_id + "|" + app_secret

        #print(id_secret)
        #no_token = no_token_base + id_secret
        #print(no_token)

        #web_response = urllib.request.urlopen(get_token).read()
        print(get_token)
        r = requests.get(get_token)
        print(r.status_code)
        print(r.text)
        #print(r.json())
        #.decode('utf8')
        #print(web_response)
        m = re.search("(^access_token=)(.*)", r.text)
        token = m.group(2)

        print(token)
        graph = GraphAPI(token)
        test = graph.get('me/posts')
        print(test)




        # gather our page level JSON Data
        # page_data = (json_fbpage["id"], json_fbpage["likes"],
        #              json_fbpage["talking_about_count"],
        #              json_fbpage["username"])
        # print( page_data)


        # extract post data
        post_url = create_post_url(current_page, app_id, app_secret)
        json_postdata = render_to_json(post_url)
        json_fbposts = json_postdata['data']

        # print post messages and ids
        for post in json_fbposts:

            try:
                # try to print out data
                print( post["id"])

                print( post["message"])


            except Exception:
                print("Key error")


        # insert the data we pulled into db
        #cursor.execute(insert_info, page_data)

        # commit the data to the db
        #connection.commit()

    #connection.close()

if __name__ == "__main__":
    main()