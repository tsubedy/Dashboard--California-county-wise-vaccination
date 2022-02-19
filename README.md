# Project_3:  Data Visualization and Dashboard
https://tsubedy.github.io/Dashboard--California-county-wise-vaccination/


## Data Extraction:

(codes are in jupyter file - data extraction)
Web scrapping tools are used to get the California countywise population data for 2021 from the website of World Population Review. Data on Covid 19 cases and Covid Vaccination are obtained from California Department of Public Health by downloading their csv files. 
GeoJson dataset on California County are obtained from the github page as below. 

## Data Processing: 

Initial data preparation and processing for developing a relational database, ERD diagram was used to establish relations using primary and foreign keys as connecting variable and transfered to SQL (PgAdmin) followed by SQLAlchemy inoder to make querries to create a final database for visualization and creating dashboard.

## Data Visualization:

The database created as above is then convereted to javascript datafile in ordert to utilize them using Plotly and Leaflets. 

Index.html is created to display a web based visualization of the plots that were created using an app.js and interactive countywise maps created using Javascript Leaflets as a separate html file is linked to show the vaccination status of the county when hoovering over the map. The color density legend is based on the percentages of the complete vaccination in the county.   

## Final Dashboard:

The Dashboard with interactive charts and maps were then published on github as a Project_3 webpage. 

The following are the sources of the data used in this project.

## Data Sources: 

California department of public health 
https://data.chhs.ca.gov/dataset/vaccine-progress-dashboard

World Population Review 
https://worldpopulationreview.com/us-counties/states/ca

Github:
https://github.com/codeforgermany/click_that_hood/blob/main/public/data/california-counties.geojson

