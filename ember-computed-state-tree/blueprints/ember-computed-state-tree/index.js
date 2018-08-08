/* eslint-env node */
module.exports = {
  //description: '',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(options) {
    return this.addPackageToProject('ember-macro-helpers','^2.0.1');
  }
};
