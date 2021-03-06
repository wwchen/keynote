#!/usr/bin/env python
import sys
import re

#
in_fname = sys.argv[1]
out_fname = re.sub(r'(\.\w*$)', r'.min\1', in_fname)

# open the file
in_f = open(in_fname, 'r')
out_f = open(out_fname, 'w')

out_line = ''
for in_line in in_f:
  line = re.sub(r'\n', '', in_line)                                     # end of line
  line = re.sub(r'^[\s]*\/\/.*', '', line)                              # comments
  line = re.sub(r';[\s]+\/\/.*', ';', line)                             # inline comments
  line = re.sub(r'^[\s]*(var.*function.*(\{|\}))[\s]*$', r'\n\1', line) # functions on its own line
  out_line += line + ' '

out_line = re.sub(r'\/\*.*\*\/', '', out_line)
out_line = re.sub(r'[\t ]+', ' ', out_line).strip()

out_f.write(out_line)
out_f.write("\n")
out_f.close()
in_f.close()
