# nginx-docker-temperature-system

### Goal
This is a simple sample of a fake temperature system made with javascript, nextjs and deployed with 
docker and nginx. Here, nginx is being used as a reverse proxy, while docker is running 3 different applications
simultaneously.

##### Temperature System
This is a fake sample of a temperature system. Basically, each time a request is sent to this api, it returns
a random temperature value as a response.

##### Precipitation System
This one is also quite simple, it takes in a temperature value and, based on that value, returns a precipitation type and a probability.

##### Weather App
Finally, we have got the frontend application, which is a simple nextjs app which just displays the current temperature, precipitation type and probability. Every time we reload the page, it shows another completely different values, 
which are got from the temperature system and Precipitation system.

#### How to run the application?
Once you have got docker and docker-compose installed on your machine, running this project 
is as simple as running the command:

```bash
sudo docker-compose up
```

After a while, all containers are gonna be created and up. So that, you can access the app by just entering your 
localhost on port 80, which is the default port, by the way

> http://localhost:80

Doing so, we can see that, random values are being displayed accordingly, if we refresh the page, we will get new ones 

![weather-app](https://github.com/KPMGE/nginx-docker-temperature-system/blob/main/weather-app.png)


