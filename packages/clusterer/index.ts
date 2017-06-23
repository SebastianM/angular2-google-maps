// main modules
export * from './directives';
export * from './services';

// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
export {AgmClustererModule} from './clusterer.module';
