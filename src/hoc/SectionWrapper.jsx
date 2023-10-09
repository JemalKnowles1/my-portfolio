import React, { Component } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '..utils/motion';

const SectionWrapper = (Component, idName) => {

    return (
        <motion.section>
            <Component />
        </motion.section>

    )
}

export default SectionWrapper