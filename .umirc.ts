const CopyWebpackPlugin = require('copy-webpack-plugin');
export default {
  chainWebpack(memo: any, { env, webpack }: any) {
    // 添加额外插件
    memo.plugin('copy').use(CopyWebpackPlugin, [{
      patterns: [
        { from: 'manifest.json' },
        { from: 'favicon.png' },
        { from: 'background.js' },
        { from: 'inject.js' },
      ]
    }]);
  },
  npmClient: 'pnpm',
  history: {
    type: 'hash'
  },
  routes: [
    { path: '/', redirect: '/account' },
    {
      path: '/account',
      component: '@/layouts/Main',
      routes: [
        { path: '/account', component: 'account/Assets' },
        { path: '/account/assets', component: 'account/Assets' },
        { path: '/account/activity', component: 'account/Activity' },
        { path: '/account/positions', component: 'account/Positions' },
      ],
    },
    {
      path: '/accounts',
      routes: [
        { path: '/accounts', component: 'accounts' },
        { path: '/accounts/:id', component: 'accounts/edit' },
      ],
    },
    {
      path: '/settings',
      // component: '@/layouts/GoBack',
      routes: [
        { path: '/settings', component: 'settings' },
        { path: '/settings/addressbook', component: 'settings/AddressBook' },
        { path: '/settings/addressbook/newaddress', component: 'settings/AddressBook/newaddress' },
        { path: '/settings/dappconnections', component: 'settings/DappConnections' },
        { path: '/settings/developersettings', component: 'settings/DeveloperSettings' },
        { path: '/settings/developersettings/managenetworks', component: 'settings/DeveloperSettings/ManageNetworks' },
        { path: '/settings/developersettings/managenetworks/add', component: 'settings/DeveloperSettings/ManageNetworks/NetworkAdd' },
        { path: '/settings/developersettings/smartcontractdevelopment', component: 'settings/DeveloperSettings/SmartContractDevelopment' },
        { path: '/settings/developersettings/smartcontractdevelopment/declare', component: 'settings/DeveloperSettings/SmartContractDevelopment/Declare' },
        { path: '/settings/developersettings/smartcontractdevelopment/develop', component: 'settings/DeveloperSettings/SmartContractDevelopment/Develop' },
        { path: '/settings/privacy', component: 'settings/Privacy' },
      ],
    },
    {
      path: '/lock',
      component: 'lock',
    },
    {
      path: '/send',
      routes: [
        { path: '/send', component: 'send' },
        { path: '/send/sendtoken/:id', component: 'send/SendToken' }
      ],
    },
    {
      path: '/trade',
      routes: [
        { path: '/trade', component: 'trade' },
      ],
    },
    {
      path: '/register',
      routes: [
        { path: '/register', component: 'register' },
      ],
    }
  ],
};
