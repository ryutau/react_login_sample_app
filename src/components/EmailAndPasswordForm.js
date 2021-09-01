import React from 'react';

const formWidth = 250;
const formHeight = 150;
const EmailAndPasswordFrom = ({onSubmit, text}) => {

  return (<form onSubmit={onSubmit} style={{
    position: 'absolute',
    top: 'calc(80% - '+formHeight/2+'px)',
    left: 'calc(50% - '+formWidth/2+'px)',
    height: formHeight,
    width: formWidth,
    padding: '10px',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }}>
    <input type="email" placeholder="email@email.com" name="email" style={{
      borderWidth: 2,
      backgroundColor: 'transparent',
      width:  formWidth,
      height: formWidth * 239 / 1334,
      color: 'white',
      textAlign: 'center'
    }} /><br />
    <input type="password" placeholder="password" name="password" style={{
      borderWidth: 2,
      backgroundColor: 'transparent',
      width:  formWidth,
      height: formWidth * 239 / 1334,
      color: 'white',
      textAlign: 'center'
    }} /><br />
    <input type="submit" value={text} style={{
      borderWidth: 2,
      backgroundColor: 'transparent',
      width:  formWidth * 0.5,
      height: formWidth * 0.5 * 174 / 716,
      color: 'white',
    }} />
  </form>);
};

export default EmailAndPasswordFrom;