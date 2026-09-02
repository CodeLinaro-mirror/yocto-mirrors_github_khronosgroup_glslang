#version 450
#extension GL_EXT_debug_printf : enable

#define FMT "this one is fine: %d"

void main()
{
    // invalid hex sequence
    debugPrintfEXT("\xZ");

    // not an octal sequence
    debugPrintfEXT("\8");

    // a macro that expands to a string literal token is still a string literal
    debugPrintfEXT(FMT, 1);

    // the format must be a string literal, not just any constant expression
    const int notAString = 1;
    debugPrintfEXT(notAString, 2);

    // a parenthesized string literal is an expression, not a string literal
    debugPrintfEXT(("%d"), 3);

    // a non-constant format
    int i = 4;
    debugPrintfEXT(i);

    // no format at all
    debugPrintfEXT();
}
