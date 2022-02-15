import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { withTranslation } from 'react-i18next';
class ContactUs extends Component {

    
    render() {
        const {t}=this.props;
        return (
            <div className="contactus text-center my-5" id="contact">
                <div className="container">
                    <h2 style={{ marginBottom: '25px' }}>{t(`home.contactus.contact`)}</h2>
                    <div className="col-xs-12 col-lg-6 m-auto">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder={t(`home.contactus.name`)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={t(`home.contactus.email`)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder={t(`home.contactus.subject`)} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder={t(`home.contactus.content`)} />
                            </Form.Group>

                            <input className="btn btn-dark" type="submit" value={t(`home.contactus.send`)} style={{
                                width: '30%', borderRadius: '30px'
                            }} />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation() (ContactUs);