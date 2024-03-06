> # THE PROJECT IS Work in progress

# Motivations

With this project I am looking in creating an improved version of the IMDb UI. I find the current UI being overloaded with information and clunky; for an experienced user this is not a problem, but for someone that is visiting the website for the first time it can be overwhelming.

# Screenshots

### Main page

![alt text](/docs/main_page_ss_1.png)

### Mega Menu (activated by pressing the "Menu" button on the Main Page)

![alt text](/docs/main_page_ss_2.png)

# Tech stack

### Front End

- HTML, CSS, JavaScript
- TailwindCSS
- React

### Back End

- NodeJS (with Express.js)
- PostgreSQL
- ORM: pgp

#### Database ERD:

![Database Drawing](/docs/erd.png)

### Other:

- Vite

# Goals

- Intuitive and easy-to-use UI, especially for new users
- Responsive Design - has to work well on all devices (Mobile, Tablets, Desktop, TVs)
- Minimal BackEnd with NodeJS and a database (SQLite/MySql)
- Greatly improve my skills with the following technologies:
  - HTML, CSS (Tailwind), JavaScript
  - React
  - React Packages: Router, Framer and more
  - NodeJS (with ExpressJS)
  - DataBases
- Create a strong portfolio piece

# Changed from the original IMDb

- Moved the IMDb Pro button from the Navbar to Profile
- Created an options button on the Navbar for:
  - Language
  - Light / Dark Mode
- Moved the Language selector to the User Dropdown

# TO DO

- [ ] Frontend

  - [ ] NavBar
    - [x] Basic layout
    - [x] Mega Menu
    - [x] Search bar + filters (visual only)
    - [ ] Close dropdowns when user moves mouse outside the menu
    - [ ] Navbar showing on scroll-up - NOT on original IMDb
  - [ ] Main Page
    - [x] HeroBox
    - [x] What to watch + other lists
    - [ ] New Trailers
    - [ ] Actors and other stuff
  - [x] Footer
  - [ ] Movie Page
  - [ ] Person Page
  - [ ] User Page
  - [ ] Movie List Page (for collections)

- [ ] Backend
  - [ ] WebAPI
    - [x] Content requests
    - [ ] People requests
  - [x] Database
