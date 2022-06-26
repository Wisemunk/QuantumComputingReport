qc.clearOutput();
qc.reset(6);
var a = qint.new(4, 'A');
var x = qint.new(2, 'X');

qc.label('initlization');
a.write(3);
x.write(0);
x.had();
qc.print("A = " + a.read() + '\n');
qc.print("B = 4" + '\n');
qc.print("X = " + x.read() + '\n');

qc.label('');
qc.nop();

// A * X
qc.label('Multiplication');
a.not(0b0011)
qc.cnot(0b000011, 0b010000);
qc.cnot(0b000110, 0b100000);
qc.cnot(0b001100, 0b110000);
qc.print("A * X = " + a.read() + '\n');
qc.label('');
qc.nop();

// A * X + B 
qc.label('Addition');
a.add(4)
qc.print("A * X + B = " + a.read() + '\n');
