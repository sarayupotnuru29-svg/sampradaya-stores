import { motion } from 'framer-motion';

interface SlokaSectionProps {
  sanskrit: string;
  meaning: string;
}

const SlokaSection = ({ sanskrit, meaning }: SlokaSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-12 text-center mandala-bg"
    >
      <div className="temple-divider mx-auto mb-6 w-48" />
      <p className="font-heading text-2xl font-semibold text-primary italic md:text-3xl">
        "{sanskrit}"
      </p>
      <p className="mt-3 text-sm text-muted-foreground font-telugu">{meaning}</p>
      <div className="temple-divider mx-auto mt-6 w-48" />
    </motion.div>
  );
};

export default SlokaSection;
