import React from 'react';
import './Login.css';
import { useTranslation } from 'react-i18next';
import TopBarLogin from '../../components/TopBarLoginRegister/TopBarLogin';

function Login() {
 const {t, i18n} = useTranslation();
  return (<>
    <TopBarLogin></TopBarLogin>
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginTitle">LamaSocial</h3>
                <span className="loginDesc">{t('loginDesc')}</span>
            </div>
            <div className="loginRight">
              <div className="loginFormContainer">
                <form action="" className='loginForm'>
                  <div className='loginInputContainer'>
                    <input type="text" name="username" id="username" className='loginInput' placeholder={t('userNameInputPlaceholder')} />
                  </div>
                  <div className='loginInputContainer'>
                    <input type="email" name="email" id="email" className='loginInput' placeholder={t('emailInputPlaceholder')} />
                  </div>
                  <div className='loginInputContainer'>
                    <button type="submit" className='loginButton'>{t('loginBtn')}</button>
                  </div>
                  <a href='' className='loginForgotPassword'>{t('forgotYourPassword')}</a>
                </form>
                <div className='loginRegisterContainer'>
                    <span>{t('notHaveAcountYetText')}</span> <a href=''>{t('createNewAccount')}</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Login;