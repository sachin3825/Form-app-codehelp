import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    StreetAddress: "",
    City: "",
    State: "",
    PostalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <form className='flex flex-col gap-2  flex-wrap' onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='Sachin'
          value={formData.firstName}
          onChange={changeHandler}
          className='rounded-sm outline'
        />
        <label htmlFor='lastName'>last Name</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          placeholder='kumawat'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline rounded-sm'
        />
        <label htmlFor='email'>email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='test55@gmail.com'
          value={formData.email}
          onChange={changeHandler}
          className='outline rounded-sm'
        />
        <label htmlFor='country'>Country</label>
        <select
          name='country'
          id='country'
          value={formData.country}
          onChange={changeHandler}
          className='outline rounded-sm'
        >
          <option>India</option>
          <option>America</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <label htmlFor='StreetAddress'>Street Address</label>
        <input
          placeholder='Street Address'
          type='text'
          id='StreetAddress'
          name='StreetAddress'
          value={formData.StreetAddress}
          onChange={changeHandler}
          className='outline rounded-sm'
        />
        <label htmlFor='City'>City</label>
        <input
          placeholder='City'
          type='text'
          id='City'
          name='City'
          value={formData.City}
          onChange={changeHandler}
          className='outline rounded-sm'
        />
        <label htmlFor='State'>State / Province</label>
        <input
          placeholder='State'
          type='text'
          id='State'
          name='State'
          value={formData.State}
          onChange={changeHandler}
          className='outline rounded-sm'
        />
        <label htmlFor='PostalCode'>Postal Code</label>
        <input
          placeholder='Postal Code'
          type='text'
          id='PostalCode'
          name='PostalCode'
          value={formData.PostalCode}
          onChange={changeHandler}
          className='outline rounded-sm'
        />
        <fieldset>
          <legend>By Email</legend>

          <div className='flex gap-5'>
            <input
              id='comments'
              name='comments'
              type='checkbox'
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className='flex gap-5'>
            <input
              id='candidates'
              name='candidates'
              type='checkbox'
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className='flex gap-5'>
            <input
              id='offers'
              name='offers'
              type='checkbox'
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <br />
        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type='radio'
            id='pushEverything'
            name='pushNotifications'
            value='Everything'
            onChange={changeHandler}
            className='mr-3'
          />

          <label htmlFor='pushEverything'>Everything</label>

          <br />
          <input
            type='radio'
            id='pushEmail'
            name='pushNotifications'
            value='Same as email'
            onChange={changeHandler}
            className='mr-3'
          />

          <label htmlFor='pushEmail'>Same as email</label>

          <br />
          <input
            type='radio'
            id='pushNothing'
            name='pushNotifications'
            value='No Push Notifications'
            onChange={changeHandler}
            className='mr-3'
          />

          <label htmlFor='pushNothing'>No Push Notifications</label>
        </fieldset>

        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
