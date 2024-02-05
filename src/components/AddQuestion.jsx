import React from 'react'

export default function AddQuestion() {
    return (
      <div> 
        <div id="register-gender">
              <input
                type="radio"
                name="gender"
                value="male"
                className="float-left mt-2 h-3 w-20"
                onClick={() => setGender('male')}
              />
              <label
                htmlFor="gender"
                className="float-left -ml-6 -mr-2 text-base"
              >
                Male
              </label>

              <input
                type="radio"
                name="gender"
                value="female"
                className="float-left mt-2 h-3 w-20"
                onClick={() => setGender('female')}
              />
              <label
                htmlFor="gender"
                className="float-left -ml-6 -mr-2 text-base"
              >
                Female
              </label>

              <input
                type="radio"
                name="gender"
                value="other"
                className="float-left mt-2 h-3 w-20"
                onClick={() => setGender('other')}
              />
              <label
                htmlFor="gender"
                className="float-left -ml-6 -mr-2 text-base"
              >
                Prefer Not to Say
              </label>
            </div>
      </div>
    )
}

