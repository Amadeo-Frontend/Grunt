module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
        },
        files: {
          "css/style.css": "less/main.less",
        },
      },
    },

    uglify: {
      my_target: {
        files: {
          "js/output.min.js": "js/input1.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
