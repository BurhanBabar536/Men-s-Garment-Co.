import React from 'react';

const ContactPage = () => {
  return (
    <div style={contactStyles.pageContainer}>
      <img
        src="/images/page1.png"
        alt="mens-fashion"
        style={contactStyles.bannerImage}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1900x500/CCCCCC/000000?text=Banner+Not+Found'; }}
      />
      <div style={contactStyles.contentContainer}>
        <div style={contactStyles.formContainer}>
          <h2 style={contactStyles.formHeading}>Contact Us</h2>
          <form style={contactStyles.form}>
            <fieldset style={contactStyles.fieldset}>
              <legend style={contactStyles.legend}>Contact Us</legend>
              <div style={contactStyles.inputGroup}>
                <label htmlFor="Name" style={contactStyles.label}>Name:</label>
                <input type="text" id="Name" style={contactStyles.input} />
              </div>
              <div style={contactStyles.inputGroup}>
                <label htmlFor="PhoneNO" style={contactStyles.label}>Phone number:</label>
                <input type="number" id="PhoneNO" style={contactStyles.input} />
              </div>
              <div style={contactStyles.inputGroup}>
                <label htmlFor="subject" style={contactStyles.label}>Subject:</label>
                <input type="text" id="subject" style={contactStyles.input} />
              </div>
              <div style={contactStyles.inputGroup}>
                <label htmlFor="Message" style={contactStyles.label}>Message:</label>
                <textarea name="Messsage area" id="Message" rows="10" style={contactStyles.textarea}></textarea>
              </div>
              <button type="submit" style={contactStyles.button}>Submit</button>
            </fieldset>
          </form>
        </div>

        <p style={contactStyles.declarationParagraph}>
          <i>Hereby declare that all the information provided in this form regarding the men's garment is true, accurate, and
            complete to the best of my knowledge. I understand that this information will be used for official records and
            product management purposes, and I take full responsibility for its authenticity and timely updates if required.
          </i>
        </p>
      </div>
    </div>
  );
};
const contactStyles = {
  pageContainer: {
    backgroundColor: '#f5f5dc',
    minHeight: '100vh',
    width: '98vw',
    color: 'white',
  },
  bannerImage: {
    width: '100%',
    height: '500px',
    maxHeight: '450px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    height:'auto',
    padding: '2rem 1rem',
  },
  formContainer: {
    backgroundColor: '#f5f5dc',
    border:'50px solid beige',

    height: 'auto',
    minHeight: '700px',
    position: 'relative',  
    borderRadius: '1rem',
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
    color: 'black',
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
  fieldset: {
    border: 'none',
    padding: 0,
    margin: 0,
  },
  legend: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '1rem',
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
  textarea: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  button: {
    width: '100%',
    backgroundColor: '#2563eb', 
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    transition: 'background-color 0.3s ease',
    outline: 'none',
  },
  declarationParagraph: {
    fontSize: '1.125rem',
    color: 'black',
    fontStyle: 'italic',
    marginBottom: '2rem',
  },
};

export default ContactPage;
