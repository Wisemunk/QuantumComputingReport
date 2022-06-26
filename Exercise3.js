qc.reset(5);

qc.write(0);
qc.nop();
qc.label('Multiple de 4')

qc.had(0x2B5C);

qc.label('resultat');
qc.cnot(0x10, 0x4 | 0x8);
qc.cnot(0x8,0x4);
qc.not(0x4);

qc.print(qc.read() + '\n')
