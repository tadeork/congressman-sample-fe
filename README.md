# Congress Members display application

This project displays a list of the members of the USA Congress. It takes the data from a public [API](https://projects.propublica.org/api-docs/congress-api/members/#lists-of-members)
and renders a list. 

## Dev guide
Follow this steps to get the project running locally:
<ol>
<li>Clone the repo locally `git clone https://github.com/tadeork/congressman-sample-fe.git` </li>
<li>Install dependencies: `npm i`</li>
<li>Run local serve `ng serve` and visit `http://localhost:4200`</li>
</ol>
For testing follow this:
<ol>
<li>Run `ng test` or with `--coverage` flag to generate the coverage report</li>
<li>Run `ng e2e` to get end to end tests.</li>
</ol>

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


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test --coverage` to execute the unit tests with coverage report.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further improvements

I consider this as a simple version that covers the most basic use and shows some basic data. The congress members do a lot of different activities which could be displayed in the details views. In further releases this should be a feature to have.


The advanced filter is using a walk around to get back to the original state of the MatTable filter function. This could be improved a lot.

