# Step 1 Create Heroku account

![](https://i.imgur.com/9M72VSB.png)

# Step 2 create new app

\*create new app

\*give it a name in lower case. Chose Europe as your region

\*click---> create app

![](https://i.imgur.com/pSX5e1p.png)

![](https://i.imgur.com/K9cmilL.png)

# Step 3 deploy app

\*connect to github

- select the your repository

![](https://i.imgur.com/rBpPjRe.png)

#Final steps

- Add the following code to your project
- create a new file name it `Procfile`, it should have the following code `web: node server.js`

![](https://i.imgur.com/hgQfiTM.png)

-Edit your port to contain `const PORT = process.env.PORT || 3000` in your `server.js`

![](https://i.imgur.com/nWDmzUS.png)
