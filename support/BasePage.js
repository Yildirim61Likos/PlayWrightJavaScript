import { chromium, firefox, webkit } from '@playwright/test';
class BasePage {
  constructor() {
      this.browser = null;
      this.context = null;
      this.page = null;
  }

  async setup(browserName = 'chromium', headless = true, baseURL = '') {
      console.log(`Setting up browser: ${browserName}...`);
      try {
          if (browserName === 'chromium') {
            this.browser = await chromium.launch({ headless, channel: 'chrome' });
          }else if (browserName === 'firefox') {
              this.browser = await firefox.launch({ headless });
          } else if (browserName === 'webkit') {
              this.browser = await webkit.launch({ headless });
          } else {
              throw new Error(`Unsupported browser: ${browserName}`);
          }

          this.context = await this.browser.newContext();
          this.page = await this.context.newPage();

          console.log(`Navigating to: ${baseURL}`);
          await this.page.goto(baseURL);
      } catch (error) {
          console.error("Error during setup:", error);
          throw error;
      }
  }

  async teardown() {
      console.log("Tearing down browser...");
      try {
          if (this.page) await this.page.close();
          if (this.context) await this.context.close();
          if (this.browser) await this.browser.close();
          console.log("Browser closed successfully.");
      } catch (error) {
          console.error("Error during teardown:", error);
          throw error;
      }
  }
}

export { BasePage };