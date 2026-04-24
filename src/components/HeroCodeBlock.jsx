import { motion } from 'framer-motion';

const codeLines = [
  { indent: 0, text: 'class SchoolSystem {', color: '#C792EA' },
  { indent: 1, text: 'private $db;', color: '#82AAFF' },
  { indent: 1, text: 'private $roles = [];', color: '#82AAFF' },
  { indent: 0, text: '', color: '#fff' },
  { indent: 1, text: 'function enrollStudent($data) {', color: '#C3E88D' },
  { indent: 2, text: '$validated = $this->validate($data);', color: '#F78C6C' },
  { indent: 2, text: '$this->db->insert("students", $validated);', color: '#F78C6C' },
  { indent: 2, text: 'return ["status" => "enrolled"];', color: '#FFCB6B' },
  { indent: 1, text: '}', color: '#C3E88D' },
  { indent: 0, text: '', color: '#fff' },
  { indent: 1, text: 'function processPayment($feeId) {', color: '#C3E88D' },
  { indent: 2, text: '$fee = Fee::findOrFail($feeId);', color: '#89DDFF' },
  { indent: 2, text: '$fee->markPaid(now());', color: '#89DDFF' },
  { indent: 1, text: '}', color: '#C3E88D' },
  { indent: 0, text: '}', color: '#C792EA' },
];

export default function HeroCodeBlock() {
  return (
    <motion.div
      className="hero-visual-code"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="code-window">
        <div className="code-window-header">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
          <span className="code-filename">SchoolSystem.php</span>
        </div>
        <div className="code-content">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="code-line"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
            >
              <span className="code-line-number">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 1.5}em`, color: line.color }}>
                {line.text || '\u00A0'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
