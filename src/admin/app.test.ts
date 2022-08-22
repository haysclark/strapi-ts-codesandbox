import type { Strapi } from "@strapi/strapi";

import { setupStrapi } from "../../test/helpers/strapi";

describe(`App`, () => {
  let strapi: Strapi;

  // give ample time for Jenkins-X to run
  jest.setTimeout(60000);

  /** this code is called once before any test is called */
  beforeAll(async () => {
    strapi = await setupStrapi(); // singleton so it can be called many times
  });

  /** this code is called once before all the tested are finished */
  afterAll(async () => {
    // const dbSettings = strapi.config.get('database');

    // close server to release the db-file

    await strapi.destroy();

    // delete test database after all tests

    // if (dbSettings && dbSettings.filename) {
    //   const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
    //   if (fs.existsSync(tmpDbFile)) {
    //     fs.unlinkSync(tmpDbFile);
    //   }
    // }
  });

  it("strapi is defined", () => {
    expect(strapi).toBeDefined();
  });
});
