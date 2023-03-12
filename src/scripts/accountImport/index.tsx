// import { isValidMnemonic } from '@ethersproject/hdnode';
// import {
//   bufferToHex,
//   getBinarySize,
//   isValidPrivate,
//   toBuffer,
// } from 'ethereumjs-util';
// import Wallet from 'ethereumjs-wallet';
// import log from 'loglevel';


// const accountImporter = {
//   async importAccount(strategy: string | number, args: any) {
//     const importer = this.strategies[strategy];
//     const privateKeyHex = importer(...args);
//     return privateKeyHex;
//   },

//   strategies: {
//     'Private Key': (privateKey: string) => {
//       if (!privateKey) {
//         throw new Error('Cannot import an empty key.'); // It should never get here, because this should be stopped in the UI
//       }

//       // Check if the user has entered an SRP by mistake instead of a private key
//       if (isValidMnemonic(privateKey.trim())) {
//         throw new Error(`t('importAccountErrorIsSRP')`);
//       }

//       const trimmedPrivateKey = privateKey.replace(/\s+/gu, ''); // Remove all whitespace

//       const prefixedPrivateKey = addHexPrefix(trimmedPrivateKey);
//       let buffer;
//       try {
//         buffer = toBuffer(prefixedPrivateKey);
//       } catch (e) {
//         throw new Error(`t('importAccountErrorNotHexadecimal')`);
//       }

//       try {
//         if (
//           !isValidPrivate(buffer) ||
//           getBinarySize(prefixedPrivateKey) !== 64 + '0x'.length // Fixes issue #17719 -- isValidPrivate() will let a key of 63 hex digits through without complaining, this line ensures 64 hex digits + '0x' = 66 digits
//         ) {
//           throw new Error(`t('importAccountErrorNotAValidPrivateKey')`);
//         }
//       } catch (e) {
//         throw new Error(`t('importAccountErrorNotAValidPrivateKey')`);
//       }

//       const strippedPrivateKey = stripHexPrefix(prefixedPrivateKey);
//       return strippedPrivateKey;
//     }
//   },
// };

// export default accountImporter;
