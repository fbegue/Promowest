# -*- coding: utf-8 -*-
__author__ = 'DICK-SHRIVELER'


from bs4 import BeautifulSoup
import urllib2
import re
import string




soup = BeautifulSoup(open("Upcoming Concerts & Events _ PromoWest Productions _ Columbus, Ohio _ Pittsburgh, PA.html"))
#class =>  bs4.BeaitufulSoup


##create interatable list of tags by finding result set of all tags w/ criteria, casting results
## to list and acccessing as different indexes

dates = soup.find_all(attrs={"class": "col-xs-2 col-sm-1 date"}) #find all by attribute selector-value pair
#class => bs4.element.ResultSet

values = list(dates)
#class => list
#date3 = values[3]
#class => bs4.element.tag

#$ print(values)

#! for all date in values
date1 = values[1].get_text(" ", strip=True)
date2 = values[2].get_text(" ", strip=True)
#class => unicode (string?)
print(date1)
print(date2)
#! store somewhere

##
##

d = soup.find_all(attrs={"class": "col-xs-7 col-sm-7 details"})
d_v = list(d)


'''
print("soup.find produces:")
print(type(d))
print("a list cast of (soup.find) produces: ")
print(type(d_v))
print("one item in that list is a:")
print(type(d_v[0]))
'''

ref = d_v[0].a['href']
artist = d_v[0].h3.get_text(" ", strip=True)
venue = d_v[0].span.get_text(" ", strip=True)
