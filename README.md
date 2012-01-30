# Selenium IDE Extension: Clipboard Format for Robotframework

This is a Firefox plugin that adds formatters to Selenium IDE so that scripts can be exported as Robot Framework Keywords.

## Installation

* Open the Selenium IDE
* Go to Options → Options… → Formats
* Add a new format definition with the name “robotframework-rc”
* Copy and paste the contents of the file “robotframework-rc.js” here

For complete installation instructions have a look at [my blog post](http://blog.codecentric.de).

## Examples

$ Input Text  labeltext=Test  Value
$ Select From List  feldId  Test
$ Input Text  feldId2  AnotherValue
$ Textfield Should Contain  verifyValue  feldId  Test


## Useful Resources
[Locating Elements by Label Text](http://wiki.openqa.org/display/SEL/locateByLabelText)
[Blog about this Plugin](http://blog.codecentric.d)


