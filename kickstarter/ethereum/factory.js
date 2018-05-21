import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x901E1Ed69C2a1EeA2ED3DF3C467F1542F18ff088'
);

export default instance;