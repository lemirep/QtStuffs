#version 450

layout(location = 2) in vec4 color;

layout(location = 0) out vec4 fragColor;

void main()
{
    fragColor = color;
}
