import React from 'react';
import './Register.css';
import { useTranslation } from 'react-i18next';
import TopBarLoginRegister from '../../components/TopBarLoginRegister/TopBarLoginRegister';

function Register() {
 const {t, i18n} = useTranslation();
  return (<>
    <TopBarLoginRegister></TopBarLoginRegister>
      
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">LamaSocial</h3>
                <span className="registerDesc">{t('loginRegisterDesc')}</span>
            </div>
            <div className="registerRight">
              <div className="registerFormContainer">
                <form action="" className='registerForm'>
                  <div className='registerInputContainer'>
                    <input type="text" name="username" id="username" className='registerInput' placeholder={t('userNameInputPlaceholder')} />
                  </div>
                  <div className='registerInputContainer'>
                    <input type="email" name="email" id="email" className='registerInput' placeholder={t('emailInputPlaceholder')} />
                  </div>
                  <div className='registerInputContainer'>
                    <input type="password" name="password" id="password" className='registerInput' placeholder={t('passwordInputPlaceholder')} />
                  </div>
                  <div className='registerInputContainer'>
                    <input type="password" name="repeatPassword" id="repeatPassword" className='registerInput' placeholder={t('repeatPasswordInputPlaceholder')} />
                  </div>
                  <div className='registerInputContainer'>
                    <button type="submit" className='registerButton'>{t('registerBtn')}</button>
                  </div>
                  {/* <a href='#' className='registerForgotPassword'>{t('forgotYourPassword')}</a> */}
                </form>
                <div className='registerRegisterContainer'>
                    <span>{t('alreadyHaveAcountYetText')}</span> <a href='#'>{t('loginBtn')}</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Register;