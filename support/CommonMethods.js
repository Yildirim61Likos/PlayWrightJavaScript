import { PageInitializer } from './PageInitializer.js';

export class CommonMethods 
{



  async loginWithValidCredentials() 
{
  await PageInitializer.login.usernameInput.fill(config.use.username);
  await PageInitializer.login.passwordInput.fill(config.use.password);
  await PageInitializer.login.loginBtn.click();
}
}