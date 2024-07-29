import * as webVitals from 'web-vitals';

console.log(Object.keys(webVitals));





// Définir le type pour le handler
type ReportHandler = (metric: any) => void;

// Définir la fonction reportWebVitals
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
function getCLS(onPerfEntry: ReportHandler) {
  throw new Error('Function not implemented.');
}

function getFID(onPerfEntry: ReportHandler) {
  throw new Error('Function not implemented.');
}

function getFCP(onPerfEntry: ReportHandler) {
  throw new Error('Function not implemented.');
}

function getLCP(onPerfEntry: ReportHandler) {
  throw new Error('Function not implemented.');
}

function getTTFB(onPerfEntry: ReportHandler) {
  throw new Error('Function not implemented.');
}

