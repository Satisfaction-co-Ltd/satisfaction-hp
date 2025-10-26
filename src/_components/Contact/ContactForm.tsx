'use client'

import React, { useState } from 'react'
import GoogleMap from './GoogleMap'

interface FormValues {
  name: string
  email: string
  number: string
  subject: string
  message: string
}

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can handle form submission, for example sending data to a server
    console.log(values)
    // Reset form after submission
    setValues({
      name: '',
      email: '',
      number: '',
      subject: '',
      message: '',
    })
  }

  return (
    <>
      <div className='contact-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Get in Touch</h2>
            <p>
              The IT industry offers a sea of options, from platforms,
              programming languages methodologies, technologies, tools, and
              more.
            </p>
          </div>

          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Your name'
                      className='form-control'
                      value={values.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='email'
                      placeholder='Your email'
                      className='form-control'
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='number'
                      placeholder='Phone number'
                      className='form-control'
                      value={values.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='subject'
                      placeholder='Subject'
                      className='form-control'
                      value={values.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      cols={30}
                      rows={6}
                      placeholder='Write your message...'
                      className='form-control'
                      value={values.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <button type='submit' className='default-btn'>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <GoogleMap />
      </div>
    </>
  )
}

export default ContactForm
