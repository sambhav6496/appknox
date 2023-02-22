import { useState } from "react";
import "./UserInput.css";
export default function UserInput(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [jobType, setJobType] = useState("selectJobType");
  const [salary, setSalary] = useState("");
  const [jobTitle, setJobTile] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [jobTypeError, setJobTypeError] = useState(false);
  const [salaryError, setSalaryError] = useState(false);
  const [jobTitleError, setJobTileError] = useState(false);
  const [disable, setDisable] = useState(true);
  function handleValidation() {
    if (
      firstName &&
      firstName !== "" &&
      lastName &&
      lastName !== "" &&
      (gender == "male" || gender == "female") &&
      jobType !== "selectJobType" &&
      jobTitle &&
      jobTitle !== "" &&
      salary &&
      !isNaN(salary.replace(/,/g, ""))
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      id: Math.random(),
      firstName,
      lastName,
      gender,
      jobTitle,
      jobType,
      salary,
    };
    props.addUser(user);
  }
  return (
    <>
      <form onChange={handleValidation}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            if (!e.target.value || e.target.value == "") {
              setFirstNameError(true);
            } else {
              setFirstNameError(false);
            }
          }}
        />
        {firstNameError && <p>Please enter first name</p>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            if (!e.target.value || e.target.value == "") {
              setLastNameError(true);
            } else {
              setLastNameError(false);
            }
          }}
          name="First Name"
          id="lastName"
        />
        {lastNameError && <p>Please enter last name</p>}
        <div
          className="radiobtn"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
            if (e.target.value == "male" || e.target.value == "female") {
              setGenderError(false);
            } else {
              setGenderError(true);
            }
          }}
        >
          <p>Gender</p>
          <input type="radio" value="male" name="male" id="male" />
          <label htmlFor="male">Male</label>
          <br />
          <input type="radio" value="female" name="male" id="female" />
          <label htmlFor="female">Female</label>
          <br />
          {genderError && <p>Please select gender</p>}
        </div>
        <div className="jobType">
          <p>Job Type</p>
          <select
            value={jobType}
            onChange={(e) => {
              setJobType(e.target.value);
              if (e.target.value == "selectJobType") {
                setJobTypeError(true);
              } else {
                setJobTypeError(false);
              }
            }}
          >
            <option value="selectJobType">Select job type</option>
            <option value="salaried">salaried</option>
            <option value="selfEmployed">self-employed</option>
            <option value="unemployed">unemployed</option>
          </select>
          {jobTypeError && <p>Please select job type</p>}
        </div>
        <br />
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => {
            setJobTile(e.target.value);
            if (!e.target.value || e.target.value == "") {
              setJobTileError(true);
            } else {
              setJobTileError(false);
            }
          }}
          name="Job Title"
          id="jobTitle"
        />
        {jobTitleError && <p>Please enter job title</p>}
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/,/g, "");
            if (
              !e.target.value ||
              e.target.value == "" ||
              isNaN(e.target.value.replace(/,/g, ""))
            ) {
              setSalaryError(true);
            } else {
              setSalaryError(false);
            }
            setSalary(e.target.value.replace(/\d(?=(?:\d{3})+$)/g, "$&,"));
          }}
          name="salary"
          id="salary"
        />
        {salaryError && <p>Please enter salary</p>}
        <br />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          disabled={disable}
        >
          Submit
        </button>
      </form>
    </>
  );
}
