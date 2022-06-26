qc.reset(5);

qc.write(0);
qc.nop();
qc.label('Multiple de 4')

qc.had(11100);

var value = qc.read();
qc.print(value + '\n')
qc.label('resultat');

var x = qint.new(5, 'x');
x.add(4);
var final = qc.read();
qc.print(final + '\n');
