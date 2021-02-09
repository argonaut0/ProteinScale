import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: Function)=> {
  if (onPerfEntry) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry as ReportHandler);
      getFID(onPerfEntry as ReportHandler);
      getFCP(onPerfEntry as ReportHandler);
      getLCP(onPerfEntry as ReportHandler);
      getTTFB(onPerfEntry as ReportHandler);
    });
  }
};

export default reportWebVitals;
