# -*- coding: utf-8 -*-
__author__ = 'DICK-SHRIVELER'


from bs4 import BeautifulSoup
from urllib.request import urlopen
#import urllib2
import re
import string

# The promowest search page consists of many rows w/ the following class. We count how many rows there are
# and then find the value of href for the first anchor <a> in every row, then follow it.
#

# Process: Find out how many shows (rows) exist and display # of entries. For as many entries as there are,
# follow the href from each one to it's event page.  A full event page has 4 "info_blocks". Each event pages
# blocks (how every many it might have) are stored in "bs" as a list.

# Then I make function definitions (I didn't know I was going to use methods and now they have to go here, poor design)

# Now for every href that I follow, I test each info_block contained in said href for the info that I need. If the
# info_block has what I want, send it's index (y_go) to that method to get the information out.


## Setup and Artist Name

url = "http://www.promowestlive.com/search"
url_base = "http://www.promowestlive.com"
page= urlopen(url)
soup = BeautifulSoup(page.read())
#soup = BeautifulSoup(open("search_promowest.html"))

d = soup.find_all(attrs={"class": "col-xs-7 col-sm-7 details"})
d_v = list(d)

print("Number of entries to be processed: %i " % len(d_v))
print("-----------------begin---------------")
print("\n")

n = 0
while n < len(d_v):

    ref_p = d_v[n].a['href']
    # print(ref_p)
    ref = url_base + ref_p
    # print(ref)
    page = urlopen(ref)
    soup = BeautifulSoup(page.read())

    # Artist Name

    a = soup.find_all(attrs={"class": "col-xs-12 col-sm-7 details single"})
    a_l = list(a)
    print(a_l[0].h3.get_text(" ", strip=True))

    #soup = BeautifulSoup(open("event1_PromoWest Productions _ Concert Venues, Festivals, Events _ Columbus, Ohio.html"))
    blocks = soup.find_all(attrs={"class": "info_block"}) #find all by attribute selector-value pair
    bs = list(blocks)

## Function Definitions

    def print_queue(item, status):
        # print('==print==')


        item_queue = []
        item_queue.append(item)

        print(item)
        print(status)
        print(item_queue)

        if (status == 'true'):
            print(item_queue)
            item_queue = []
        elif (status == 'clear'):
            item_queue = []
        return 0

    def O_A(y_go):

        ##print(bs[0].div.p) #is the first empty p. Find it's (hopefully populated) siblings
        #! Don't know why this stopped working. .

        '''
        openingArtists = bs[0].div.p.find_next_siblings("p")
        for oA in openingArtists:
            if (oA.get_text() != ""):
                    print(oA.get_text())
        '''

        bs[y_go].div.h3.get_text() == "Opening Artist"

        openingArtists = bs[y_go].div.p.get_text("\n", strip=True)
        print(openingArtists, '-')
        return 0


    def Pricing(y_go):
        bs[y_go].div.h3.get_text() == "Pricing"
        pricing = bs[y_go].div.div.div.find_next_siblings("div")
        #shitty solution to delmit text at front of prices

        for p in pricing:
            t = str(p.get_text())
            # print(t[4:len(t)])
            print(t[4:len(t)], '-')
        return 0


    def Date(y_go):
        #shitty solution to delmit text at end of date
        bs[y_go].div.h3.get_text() == "Date"
        date = bs[y_go].div.p.get_text(" ", strip=True)
        doors = bs[y_go].div.p.span.get_text(" ", strip=True)
        leng_d = len(date)
        leng_t = len(bs[y_go].div.p.span.get_text())

        # print(date[0:leng_d - leng_t - 1])
        # print(doors)
        print(date[0:leng_d - leng_t - 1] + doors, '-')
        return 0


    def Venue(y_go):

        ##shitty solution to delmit text at end of location
        ##attempted to prettify a single element to make things more consistent?
        bs[y_go].div.h3.get_text() == "Location"
        venues = bs[y_go].div.p.get_text(" ", strip=True)
        sp_0= BeautifulSoup(str(bs[y_go]))
        sp_1 = sp_0.prettify()

        sp_2 = BeautifulSoup(sp_1)
        sp_2_list = list(sp_2)
        len_GVI = len(sp_2_list[0].div.p.span.a.get_text(" ", strip=True))
       # print(venues[0:len(venues) - len_GVI - 1])
        venue_name = venues[0:len(venues) - len_GVI - 1]
        status = 'clear' if venue_name == 'Stage AE 400 North Shore Drive Pittsburgh, PA 15212' else 'true'
        # if(good_venue == 'true'):
        #     print(venue_name)

        print(venue_name,status)
        #return good_venue
        return 0


    n = n + 1



    ## Function Calls

    y = 0
    while (y < len(bs)):
        #check what the content of each block is.
        #when the title matches, send that block off to matching function

        # if(bs[y].div.h3.get_text() == "Opening Artist"):
        #     O_A(y)
        # elif(bs[y].div.h3.get_text() == "Pricing"):
        #     Pricing(y)
        # elif(bs[y].div.h3.get_text() == "Date"):
        #     Date(y)
        # elif(bs[y].div.h3.get_text() == "Location"):
        #     Venue(y)

        if (bs[y].div.h3.get_text() == "Location"):
            Venue(y)
        if (bs[y].div.h3.get_text() == "Opening Artist"):
            O_A(y)
        if (bs[y].div.h3.get_text() == "Pricing"):
            Pricing(y)
        if (bs[y].div.h3.get_text() == "Date"):
            Date(y)


        y = y + 1

        # keeping elif scheme

        # good_venue = 'false'
        #
        # if (bs[y].div.h3.get_text() == "Location"):
        #     good_venue = Venue(y)
        #     print(good_venue)
        # elif (bs[y].div.h3.get_text() == "Opening Artist" and good_venue):
        #      O_A(y)
        # elif(bs[y].div.h3.get_text() == "Pricing" and good_venue):
        #     Pricing(y)
        # elif(bs[y].div.h3.get_text() == "Date" and good_venue):
        #     Date(y)
        #
        # y = y + 1

        # fucking up the elif scheme

        # if (bs[y].div.h3.get_text() == "Location"):
        #     good_venue = Venue(y)
        #     print(good_venue);
        #     if(good_venue):
        #         if(bs[y].div.h3.get_text() == "Opening Artist"):
        #             O_A(y)
        #         if (bs[y].div.h3.get_text() == "Pricing"):
        #             Pricing(y)
        #         if (bs[y].div.h3.get_text() == "Date"):
        #             Date(y)
        #y = y + 1



    print("--------------------------------")