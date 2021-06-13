# Congress Members display application

This project displays a list of the members of the USA Congress. It takes the data from a public [API](https://projects.propublica.org/api-docs/congress-api/members/#lists-of-members)
and renders a list. 

## Dev guide
Follow this steps to get the project running locally:

1. Clone the repo locally `git clone https://github.com/tadeork/congressman-sample-fe.git`
2. Change directory to the cloned project `cd congressman-sample-fe`
3. Install dependencies: `npm i`
4. Run local dev serve `ng serve` and visit `http://localhost:4200`
5. If you want a prod versrion run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory

### For testing follow this:

Run `ng test` or with `--coverage` flag to generate the coverage report.

Run `ng e2e` to get end to end tests.


## Functionalities
- Displays a paginated list of all the members of the Congress
- Each element of the list is clickable to see the details of each member.
- The title on the toolbar is a link to return to the home page.
- The main list comes with an input to filter over all the fields
- In the main list there's a toggle button to display an advanced search inputs to filter over the displayed fields.

## Some technical characteristics
- This app uses a [library](https://github.com/scttcper/ngx-toastr) to display custom messages such as error messages when the API fails.
- The e2e library used was Cypress and follows a very simple use case.
- For some unknown reason when the app does a request to the API the first one fails with an authorization token error, even though, the token is present in the call. That's why the interceptor to set the headers api-key has a retry function.


## Further improvements

I consider this as a simple version that covers the most basic use and shows some basic data. The congress members do a lot of different activities which could be displayed in the details views. In further releases this should be a feature to have.


The advanced filter is using a walk around to get back to the original state of the MatTable filter function. This could be improved a lot.

