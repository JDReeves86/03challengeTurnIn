# Challenge 03 


## Password Generator

---

### Contents 

---

1. Objectives
2. About
3. Screenshots
4. Links
5. Assignment details & grading rubric (*ignore me*)

<br>
<br>

### Objectives ###

---

<br>

1. WHEN the button to generate a password is clicked, user is presented with a series of prompts for password criteria.
2. WHEN prompted for password criteria, the user selects which criteria to include in the password.
3. WHEN prompted for the length of the password, the user chooses a length of at least 8 characters and no more than 128 characters.
4. WHEN asked for character types to include in the password, the user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters.
5. WHEN the user answers each prompt, input is validated and at least one character type should be selected.
6. WHEN all prompts are answered a password is generated that matches the selected criteria.
7. WHEN the password is generated it is written to the page.

<br>
<br>

### About ###

---

<br>

1. WHEN the button to generate a password is clicked, user is presented with a series of prompts for password criteria.
    >The generate password button runs the function to generate the password, but first requires user input to build criteria. These come in the form of browser alerts that take user input. Some use the alert() method and others which only need yes or no answers use the confirm() method.

<br>

2. WHEN prompted for password criteria, the user selects which criteria to include in the password.
    >Once the generate password button is selected, the user is met with a series of prompts that the user will interact with to decide which criteria to use in the password. 

<br>

3. WHEN prompted for the length of the password, the user chooses a length of at least 8 characters and no more than 128 characters
    >The first prompt a user is met with is one where they decide the length of the password. This prompt lets them know that the minimum is 8 characters and the maximum is 128. If they choose a number outside of those parameters they receive an alert that their selection does not meet criteria and resets the page. This same alert fires if they input soemthing other than a numeric value. If no input is received and the user clicks cancel, the page simply returns to the inital state. Then user must input a numeric value betwen 2 & 128 to continue.

<br>

4. WHEN asked for character types to include in the password, the user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters.
    >Once a length is accepted, the user will see a series of prompts asking if they want to use lowercase, uppercase, numeric, and special characters. Depending on what the user inputs, these values will be placed/concatenated to an array to generate the password. Special characters were chosen from the OWASP foundation, with the exception of a few.

<br>

5. WHEN the user answers each prompt, input is validated and at least one character type should be selected.
    >Once all prompts are completed and the user has selected their desired length and character use, a final check of the length of the password array is completed. If the array length is 0, then the user has not selected any of the criteria and they receive an alert that they need to select at least one of the criteria confirmations to generate a password.

<br>

6. WHEN all prompts are answered a password is generated that matches the selected criteria.
    >After the user responds to each prompt and the final check is performed and passed, a password is generated. A random password is acheived by taking the password array and iterating over it and choosing a value at random until the loop iterates over the array as many times as the user initially input. Each value chosen for each iteration is placed into a string variable declared at the beginning of the script. This string will ultimately become the output of the function. 

<br>

7. WHEN the password is generated it is written to the page.
    >Once the function is done genrating a password, it is printed to the screen where the user can copy the password.

<br>
<br>

### Screenshots ###

---

<br>

![myscreenshot](./Assets/Screenshot1.png)

<br>

Prompt asking for length of password.

<br>

  ---

<br>

![myscreenshot](./Assets/Screenshot2.png)

<br>

Example of a password generated.

<br>

  ---

<br>

![myscreenshot](./Assets/Screenshot3.png)

<br>

Password length selected is less than 8 or more than 128, or user input something other than a numeric value.

<br>

---

<br>

![myscreenshot](./Assets/Screenshot4.png)

<br>

Alert received if no criteria are selected

<br>

### Links ###

---

<br>


Link to Github repo: https://github.com/JDReeves86/03challengeTurnIn


Link to live page: https://jdreeves86.github.io/03challengeTurnIn/

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

---

---

## Assignment Details & Grading Rubric ##

---

---

<br>
<br>

# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
