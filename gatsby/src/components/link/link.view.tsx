import React from "react"
import { Link } from "gatsby"
import styles from "./link.module.scss"

export default (props: any) => <Link className={styles.link} {...props} />
