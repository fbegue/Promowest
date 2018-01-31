# -*- coding: utf-8 -*-
__author__ = 'DICK-SHRIVELER'


from bs4 import BeautifulSoup
import urllib2
import re
import string

'''

#trying to get a list of tags: anchors that contain the text elsie"
#
test = """
<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
<a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
"""
soup = BeautifulSoup(test, 'html.parser')
print(soup.find_all("a", text="Elsie"))

#expected: (full tag, not just some text)
# [<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>]


#trying to use wrap (eexample is from manual)
#
soup = BeautifulSoup("<p>I wish I was bold.</p>")
# <b>I wish I was bold.</b>

y = (soup.p.wrap(soup.new_tag("div")))
print(y)
# <div><p><b>I wish I was bold.</b></p></div>


'''
#testing siblings logic

soup = BeautifulSoup(open("full_promowest.html"))
blocks = soup.find_all(attrs={"class": "info_block"}) #find all by attribute selector-value pair
bs = list(blocks)
if (len(bs)) == 4:

        ## Opening Artists

        ##print(bs[0].div.p) #is the first empty p. Find it's (hopefully populated) siblings
        #! Don't know why this stopped working. .
        #openingArtists = bs[0].div.p.find_next_siblings("p"))
    openingArtists = bs[0].div.p.find_next_siblings("p")
    print(openingArtists)
    print(len(openingArtists))