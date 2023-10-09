# React Event Management

Website live link: [React Event Management](https://react-event-management-nazmul1582.netlify.app/)

### Git Commit

- created a function for createUser in AuthContext and get it from register component
- find currentUser and show user in header area conditionally and added updateProfile functionality
- login functionality added and applied in login page and navigate to home page after login
- created private route and protected serviceDetails page for logged in users
- Added google login functionality and show success toast after login or register
- reset input values after login or register and styled other pages
- create MyEvent page and made it and Profile to private for only logged in user
- created not found page and show error status code and status text
- used AOS package for animation and applied animation in home page and profile page


### Features 

- Loaded and displayed services dynamically in the home page.
- Added login and Registration functionality and set up some private route which only logged-in user can access.
- User can register by providing name, email and password or login with google.
- Only logged-in user can see service details by clicking show details button of service card. Others can't see and when they will click show details button, they navigate to login page. 
- Without login or register, user can't see protected (profile and my-event) pages thought they want to see by sreaching specific url.
- If your go in woring route, He will see not found page and a Go Home button. By clicking this button, He can navigate to home page.
- After register of login, user can see his name and image in the navbar. If user register with email and password, His profile picture will a demo profile picture. But if he login with google, his profile picture will be google account's profile picture.