import * as React from "react";
import {
  HTMLMotionProps,
  motion,
  Target,
  TargetAndTransition,
} from "framer-motion";

const DEFAULT_RENDERERS = {
  char: ({ children }: any) => {
    return (
      <div
        style={{
          perspective: 500,
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    );
  },
  word: ({ children }: any) => {
    return (
      <div
        style={{
          perspective: 500,
          position: "relative",
          display: "inline-block",
        }}
      >
        {children}
      </div>
    );
  },
  line: ({ children }: any) => {
    return (
      <div
        style={{
          perspective: 500,
          position: "relative",
        }}
      >
        {children}
      </div>
    );
  },
};

export type MotionTextVariants = {
  char?: {
    [key: string]:
      | TargetAndTransition
      | ((
          custom: CharContext,
          current: Target,
          velocity: Target
        ) => TargetAndTransition | string);
  };
  word?: {
    [key: string]:
      | TargetAndTransition
      | ((
          custom: WordContext,
          current: Target,
          velocity: Target
        ) => TargetAndTransition | string);
  };
  line?: {
    [key: string]:
      | TargetAndTransition
      | ((
          custom: LineContext,
          current: Target,
          velocity: Target
        ) => TargetAndTransition | string);
  };
};

export type MotionTextRenderers = {
  char?: any;
  word?: any;
  line?: any;
};

export type MotionTextStyles = {
  char?: React.CSSProperties;
  word?: React.CSSProperties;
  line?: React.CSSProperties;
};

export type MotionTextClasses = {
  char?: string;
  word?: string;
  line?: string;
};

export interface MotionTextProps
  extends Omit<HTMLMotionProps<"div">, "variants"> {
  text: string;
  variants?: MotionTextVariants;
  renderers?: MotionTextRenderers;
  styles?: MotionTextStyles;
  classes?: MotionTextClasses;
  data?: any;
}

export type IndexValuePair = {
  index: number;
  value: string;
};

export type LineContext = {
  // Current line
  line: IndexValuePair;
  // First char in line
  startChar: IndexValuePair;
  // Last char in line
  endChar: IndexValuePair;
  // First word in line
  startWord: IndexValuePair;
  // Last word in line
  endWord: IndexValuePair;
  // Total number of chars
  charCount: number;
  // Total number of words
  wordCount: number;
  // Total number of lines
  lineCount: number;
  // custom data
  data: any;
};

export type WordContext = {
  // Line word belongs to
  line: IndexValuePair;
  // Current word
  word: IndexValuePair;
  // First char in word
  startChar: IndexValuePair;
  // Last char in word
  endChar: IndexValuePair;
  // Total number of chars
  charCount: number;
  // Total number of words
  wordCount: number;
  // Total number of lines
  lineCount: number;
  // custom data
  data: any;
};

export type CharContext = {
  // Line char belongs to
  line: IndexValuePair;
  // Word char belongs to
  word: IndexValuePair;
  // Current char
  char: IndexValuePair;
  // Total number of chars
  charCount: number;
  // Total number of words
  wordCount: number;
  // Total number of lines
  lineCount: number;
  // custom data
  data: any;
};

const WHITESPACE_REGEX = /\S/;

const getContexts = (text: string, data: any) => {
  let lineCounter = 0;
  let wordCounter = 0;
  let charCounter = 0;

  const lineContexts: Record<string, LineContext> = {};
  const wordContexts: Record<string, WordContext> = {};
  const charContexts: Record<string, CharContext> = {};

  text
    .split(/\r?\n/)
    .filter((x) => WHITESPACE_REGEX.test(x))
    .forEach((line, i) => {
      // line = line.trim();
      const lineIndex = lineCounter++;
      const lineContext: any = {
        line: {
          value: line,
          index: lineIndex,
        },
        data,
      };
      lineContexts[`${i}`] = lineContext;
      line
        .split(" ")
        .filter((x) => WHITESPACE_REGEX.test(x))
        .forEach((word, j, wordArr) => {
          const wordIndex = wordCounter++;
          const wordContext: any = {
            word: {
              value: word,
              index: wordIndex,
            },
            line: lineContext.line,
            data,
          };
          wordContexts[`${i}#${j}`] = wordContext;
          if (j === 0) {
            lineContext.startWord = {
              value: word,
              index: wordIndex,
            };
          }
          if (j === wordArr.length - 1) {
            lineContext.endWord = {
              value: word,
              index: wordIndex,
            };
          }
          word.split("").forEach((char, k, charArr) => {
            const charIndex = charCounter++;
            const charContext: any = {
              char: {
                value: char,
                index: charIndex,
              },
              word: wordContext.word,
              line: lineContext.line,
              data,
            };
            charContexts[`${i}#${j}#${k}`] = charContext;
            if (j === 0 && k === 0) {
              lineContext.startChar = {
                value: char,
                index: charIndex,
              };
            }
            if (j === wordArr.length - 1 && k === charArr.length - 1) {
              lineContext.endChar = {
                value: char,
                index: charIndex,
              };
            }
            if (k === 0) {
              wordContext.startChar = {
                value: char,
                index: charIndex,
              };
            }
            if (k === charArr.length - 1) {
              wordContext.endChar = {
                value: char,
                index: charIndex,
              };
            }
          });
        });
    });

  Object.values(lineContexts).forEach((context) => {
    context.charCount = charCounter;
    context.wordCount = wordCounter;
    context.lineCount = lineCounter;
  });

  Object.values(wordContexts).forEach((context) => {
    context.charCount = charCounter;
    context.wordCount = wordCounter;
    context.lineCount = lineCounter;
  });

  Object.values(charContexts).forEach((context) => {
    context.charCount = charCounter;
    context.wordCount = wordCounter;
    context.lineCount = lineCounter;
  });

  return {
    lineContexts,
    wordContexts,
    charContexts,
  };
};

const MotionText = ({
  text,
  variants = {},
  renderers = {},
  styles = {},
  classes = {},
  data,
  ...otherProps
}: MotionTextProps) => {
  const { lineContexts, wordContexts, charContexts } = React.useMemo(
    () => getContexts(text, data),
    [text, JSON.stringify(data)]
  );

  return (
    <motion.div {...otherProps}>
      {text
        .split(/\r?\n/)
        .filter((x) => WHITESPACE_REGEX.test(x))
        .map((line, i) => {
          const LineRenderer = renderers?.line ?? DEFAULT_RENDERERS.line;

          return (
            <LineRenderer key={i}>
              <motion.div
                style={{ position: "relative", ...styles.line }}
                className={classes.line}
                variants={variants.line}
                custom={lineContexts[`${i}`]}
              >
                {line
                  .split(" ")
                  .filter((x) => WHITESPACE_REGEX.test(x))
                  .map((word, j, wordArr) => {
                    const WordRenderer =
                      renderers?.word ?? DEFAULT_RENDERERS.word;

                    return (
                      <WordRenderer key={j}>
                        <motion.div
                          className={classes.word}
                          style={{
                            display: "inline-block",
                            position: "relative",
                            ...styles.word,
                          }}
                          variants={variants.word}
                          custom={wordContexts[`${i}#${j}`]}
                        >
                          {word.split("").map((char, k) => {
                            const CharRenderer =
                              renderers?.char ?? DEFAULT_RENDERERS.char;
                            return (
                              <CharRenderer key={k}>
                                <motion.div
                                  variants={variants.char}
                                  className={classes.char}
                                  style={{
                                    display: "inline-block",
                                    position: "relative",
                                    ...styles.char,
                                  }}
                                  custom={charContexts[`${i}#${j}#${k}`]}
                                >
                                  {char}
                                </motion.div>
                              </CharRenderer>
                            );
                          })}
                        </motion.div>
                        {j !== wordArr.length - 1 && <span>&nbsp;</span>}
                      </WordRenderer>
                    );
                  })}
              </motion.div>
            </LineRenderer>
          );
        })}
    </motion.div>
  );
};

export default MotionText;
