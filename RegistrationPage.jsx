import React from 'react';

const RegistrationPage = () => {
  return (
    <div style={registrationStyles.pageContainer}>
      <img
        src="/images/Screenshot 2025-04-06 191849.jpg"
        alt="Registration image"
        style={registrationStyles.bannerImage}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1900x300/CCCCCC/000000?text=Banner+Not+Found'; }}
      />
      <div style={registrationStyles.contentContainer}>
          <div style={registrationStyles.formContainer}>
           <h2 style={registrationStyles.formHeading}>Registration Form</h2>
          <form style={registrationStyles.form}>
            <fieldset>
              <div style={registrationStyles.inputGroup}>
                <label htmlFor="firstname" style={registrationStyles.label}>First Name:</label>
                <input type="text" id="firstname" style={registrationStyles.input} />
              </div>
              <div style={registrationStyles.inputGroup}>
                <label htmlFor="lastname" style={registrationStyles.label}>Last Name:</label>
                <input type="text" id="lastname" style={registrationStyles.input} />
              </div>
              <div style={registrationStyles.inputGroup}>
                <label htmlFor="Email" style={registrationStyles.label}>Email:</label>
                <input type="text" id="Email" style={registrationStyles.input} />
              </div>
              <div style={registrationStyles.inputGroup}>
                <label htmlFor="password" style={registrationStyles.label}>Password:</label>
                <input type="password" id="password" style={registrationStyles.input} />
              </div>
              <div style={registrationStyles.inputGroup}>
                <label htmlFor="confirmPassword" style={registrationStyles.label}>Confirm Password:</label>
                <input type="password" id="confirmPassword" style={registrationStyles.input} />
              </div>
              <div style={registrationStyles.inputGroup}>
                <h style={registrationStyles.label}>Gender</h>
                <div style={registrationStyles.radioGroup}>
                  <label style={registrationStyles.radioLabel}>
                    <input type="radio" id="Male" name="gender" style={registrationStyles.radioInput} />Male
                  </label>
                  <label style={registrationStyles.radioLabel}>
                    <input type="radio" id="female" name="gender" style={registrationStyles.radioInput} />Female
                  </label>
                  <label style={registrationStyles.radioLabel}>
                    <input type="radio" id="others" name="gender" style={registrationStyles.radioInput} />Others
                  </label>
                </div>
              </div>
              <div style={registrationStyles.inputGroup}>
                <label htmlFor="mensGarments" style={registrationStyles.label}>Men's Garments:</label>
                <select id="mensGarments" name="mensGarments" style={registrationStyles.select}>
                  <option value="">Select an option</option>
                  <option value="shirt">Shirt</option>
                  <option value="tshirt">T-Shirt</option>
                  <option value="trousers">Trousers</option>
                  <option value="jeans">Jeans</option>
                  <option value="jacket">Jacket</option>
                  <option value="suit">Suit</option>
                  <option value="hoodie">Hoodie</option>
                  <option value="shorts">Shorts</option>
                </select>
              </div>
              <div style={registrationStyles.inputGroup}>
                <p style={registrationStyles.label}>Types of wearing</p>
                <div style={registrationStyles.checkboxGroup}>
                  <label style={registrationStyles.checkboxLabel}><input type="checkbox" name="weartype" value="Formal " style={registrationStyles.checkboxInput} />Formal</label>
                  <label style={registrationStyles.checkboxLabel}><input type="checkbox" name="weartype" value="Casual" style={registrationStyles.checkboxInput} />Casual</label>
                  <label style={registrationStyles.checkboxLabel}><input type="checkbox" name="weartype" value="Sports" style={registrationStyles.checkboxInput} />Sports</label>
                </div>
              </div>
              <div style={registrationStyles.buttonGroup}>
                <button type="submit" style={registrationStyles.submitButton}>Submit</button>
                <button type="reset" style={registrationStyles.resetButton}>Reset</button>
              </div>
            </fieldset>
          </form>
        </div>

        <p style={registrationStyles.declarationParagraph}>
          <i>Hereby declare that all the information provided in this form regarding the men's garment is true, accurate,
            and complete to the best of my knowledge. I understand that this information will be used for official records
            and product management purposes, and I take full responsibility for its authenticity and timely updates if
            required.
          </i>
        </p>
      </div>
    </div>
  );
};

 const registrationStyles = {
  pageContainer: {
    backgroundColor: 'black',
    minHeight: '100%',
    width:'98vw',
    color: 'white',
  },
  bannerImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '400px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  mainPageHeading: {  
    fontSize: '2.25rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    textAlign: 'center',  
    position: 'static',  
    left: 'auto',
    top: 'auto',
    transform: 'none',
  },
  formContainer: {
    backgroundColor: '#f5f5dc', /* beige */
    height: 'auto',
    minHeight: '700px',
    position: 'relative', 
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: '2rem',
    width: '100%', 
    maxWidth: '800px',
    margin: '0 auto', 
  },
  formHeading: {
    fontSize: '2.25rem',
    fontWeight: '800',
    color: '#1a202c',  
    marginBottom: '1.5rem', 
    textAlign: 'center', 
    position: 'static',
    left: 'auto',
    top: 'auto',
    transform: 'none',
  },
  form: {
    backgroundColor: 'grey',
    width: '100%',
    maxWidth: '30rem',
    padding: '2rem',
    borderRadius: '0.5rem',
    border: '2px solid white',
    color: 'black',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'static', 
    top: 'auto',
    left: 'auto',
    transform: 'none',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    color: 'white',
    marginBottom: '0.25rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  radioGroup: {
    display: 'flex',
    gap: '1rem',
    color: 'white',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  radioInput: {
    marginRight: '0.25rem',
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    color: 'black',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    color: 'white',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  checkboxInput: {
    marginRight: '0.25rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  submitButton: {
    flex: '1',
    backgroundColor: '#2563eb',  
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    transition: 'background-color 0.3s ease',
    outline: 'none',
  },
  resetButton: {
    flex: '1',
    backgroundColor: '#6b7280',  
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    transition: 'background-color 0.3s ease',
    outline: 'none',
  },
  declarationParagraph: {
    fontSize: '1.125rem',
    color: 'white',
    fontStyle: 'italic',
    marginBottom: '2rem',
  },
};

export default RegistrationPage;
