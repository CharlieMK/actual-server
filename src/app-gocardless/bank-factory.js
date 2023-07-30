import IngPlIngbplpw from './banks/ing-pl-ingbplpw.js';
import IntegrationBank from './banks/integration-bank.js';
import MbankRetailBrexplpw from './banks/mbank-retail-brexplpw.js';
import NorwegianXxNorwnok1 from './banks/norwegian-xx-norwnok1.js';
import SandboxfinanceSfin0000 from './banks/sandboxfinance-sfin0000.js';

const banks = [
  IngPlIngbplpw,
  MbankRetailBrexplpw,
  NorwegianXxNorwnok1,
  SandboxfinanceSfin0000,
];

export default (institutionId) =>
  banks.find((b) => b.institutionIds.includes(institutionId)) ||
  IntegrationBank;
