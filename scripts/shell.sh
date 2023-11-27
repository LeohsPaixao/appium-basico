if [ "$SHELL" = "/bin/bash" ]; then
    echo "Está rodando no Bash"
elif [ "$SHELL" = "/bin/zsh" ]; then
    echo "Está rodando no Zsh"
else
    echo "Shell não reconhecido: $SHELL"
fi
