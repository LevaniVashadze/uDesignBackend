# EcommerceWebsite

Built using django and React. Full localization support and a dark theme included.

WIP

To run it locally:

You need to have python installed.

`pip install -r requirements.txt`

now copy the secrets.env.template file and rename it to remove the .template

then go into the frontend folder

`cd frontend`

here run

`npm i --include=dev`

This is the setup done, optionally you can also create a superuser.

`python manage.py createsuperuser`

Now you can run the project


Inside the frontend folder run this for the frontend:

`npm run dev`

In the root folder for the backend run:

`python manage.py runserver`
