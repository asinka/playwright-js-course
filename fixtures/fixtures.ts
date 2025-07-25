import { test as baseTest, expect } from '@playwright/test';

import usersData from '../artifacts/auth/creds.json';

export const LONG_ACTION_TIMEOUT = 30 * 1000;
export const DEFAULT_ACTION_TIMEOUT = 5 * 1000;

type Fixtures = {
  users: typeof usersData;
};

const fixturedTest = baseTest.extend<Fixtures>({
  users: usersData,
});

export const test = fixturedTest;
export { expect };
