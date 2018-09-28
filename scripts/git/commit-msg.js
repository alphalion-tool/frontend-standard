#!/usr/bin/env node

'use strict';

var fs = require('fs');
var util = require('util');
var resolve = require('path').resolve;

var MAX_LENGTH = 100;
var PATTERN = /^((?:fixup!\s*)?(\w*)(\(([\w\$\.\*/-]*)\))?\: (.*))(\n|$)/;
var TYPES = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert'];

var error = function() {
    console.error('INVALID COMMIT MSG: ' + util.format.apply(null, arguments));
};

var validateMessage = function(message) {
    var isValid = true;

    var match = PATTERN.exec(message);

    if (!match) {
        error('does not match "<type>(<scope>): <subject>" !');
        isValid = false;
    }

    // Display original message when it is not valid, otherwise it will be lost
    if (!isValid && message) {
        console.log(message);
    }

    return isValid;
};


var commitMsgFile = process.argv[2] || './.git/COMMIT_EDITMSG';
var incorrectLogFile = commitMsgFile.replace('COMMIT_EDITMSG', 'logs/incorrect-commit-msgs');

fs.readFile(commitMsgFile, function(err, buffer) {
    console.log(buffer);
    var msg = firstLineFromBuffer(buffer);

    function hasToString(x) {
        return x && typeof x.toString === 'function';
    };

    if (!validateMessage(msg)) {
        fs.appendFile(incorrectLogFile, msg + '\n', function() {
            process.exit(1);
        });
    } else {
        process.exit(0);
    }

    function firstLineFromBuffer(buffer) {
        return hasToString(buffer) && buffer.toString().split('\n').shift();
    }
});