import React from 'react';
import './Login.css';
import { useTranslation } from 'react-i18next';
import TopBarLoginRegister from '../../components/TopBarLoginRegister/TopBarLoginRegister';

function Login() {
 const {t, i18n} = useTranslation();
  return (<>
    <TopBarLoginRegister></TopBarLoginRegister>
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginTitle">LamaSocial</h3>
                <span className="loginDesc">{t('loginRegisterDesc')}</span>
            </div>
            <div className="loginRight">
              <div className="loginFormContainer">
                <form action="" className='loginForm'>
                  <div className='loginInputContainer'>
                    <input type="email" name="email" id="email" className='loginInput' placeholder={t('emailInputPlaceholder')} />
                  </div>
                  <div className='loginInputContainer'>
                    <input type="text" name="password" id="password" className='loginInput' placeholder={t('passwordInputPlaceholder')} />
                  </div>
                  
                  <div className='loginInputContainer'>
                    <button type="submit" className='loginButton'>{t('loginBtn')}</button>
                  </div>
                  <a href='#' className='loginForgotPassword'>{t('forgotYourPassword')}</a>
                </form>
                <div className='loginRegisterContainer'>
                    <span>{t('notHaveAcountYetText')}</span> <a href='#'>{t('createNewAccount')}</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Login;