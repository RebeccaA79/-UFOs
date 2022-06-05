# UFO Sightings Website

## Overview

The purpose of this project was to expand the functionality of the UFO Sightings webpage, which at present only allowed users to search by date. Allowing users to search on multiple fields (such as city, state, country, and shape) at the same time creates a more customizable interface for users to perform an efficient search based on their unique parameters. Javascript was utilized  to display the UFO sightings data in a table format and further tailored by adding filters. Further styling of the HTML page was created by utilizing CSS. 


## Results

The below image shows the layout of the UFO Sightings Webpage:

  ![UFO Sightings Webpage]([https://github.com/RebeccaA79/surfs_up/blob/main/resources/june_temps_summary_stats.png](https://github.com/RebeccaA79/-UFOs/blob/main/UFO%20Sightings%20HTML%20Webpage.png)


Currently there is placeholder information in the various search fields. To perform a search using the city of San Diego as an example, type San Diego ion the search box next to "Enter a City" and hit the Enter button. The table will be filtered on the 3 sightings referencing San Diego. 

To further narrow the search on top of the already filtered data, the user code input 1/1/2010 in the 'Enter a Date" field and hit enter (or tab). The table will update from 3 sightings to 2 sightings. 

To clear the search parameters, simply delete the data entered in the fields and the table will update accordingly back to the original dataset.


## Summary

The multi-filter functionality has created a dynamic and user-friendly experience. There are certain limitations and enhancements that can be considered.

One of the drawbacks of this webpage is that the code written in Javascript is not easily reusable. If we wanted to create another page with an additional data table and filters we would have to copy and paste or reuse the same code and tweak it. This could be a tedious process versus using a class or component based structure, which would allow us to reuse our code in multiple places throughout the code in an efficient manner.. 

To address this limitation, the following recommendations for development should be considered:

1. Convert the app.js file into a Javascript class that would accept a list of arguments including a dataset that would allow us to reuse the code throughout the application as needed.

2. Convert this project into a more modern data binding language such as react.js or angular. This would allow us to create reusable components for both our filter feature as well as our data table feature. 
  
